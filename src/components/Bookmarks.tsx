import React, { useState, useEffect } from 'react';
import type { Bookmark } from '../types';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FaPlus, FaTimes, FaPen } from 'react-icons/fa';
import styles from './Bookmarks.module.css';

interface BookmarksProps {
    isLocked: boolean;
    gridColumns: number;
}

// Sortable Item Component
const SortableItem = ({ bookmark, onDelete, onEdit, isLocked }: { bookmark: Bookmark; onDelete: (id: string) => void; onEdit: (bookmark: Bookmark) => void; isLocked: boolean }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: bookmark.id,
        disabled: isLocked
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={styles.bookmarkItem}>
            {isLocked ? (
                <a
                    href={bookmark.url}
                    className={styles.link}
                    style={{ cursor: 'pointer' }}
                >
                    <div className={styles.iconContainer}>
                        {bookmark.icon ? (
                            <img src={bookmark.icon} alt={bookmark.title} className={styles.icon} />
                        ) : (
                            <div className={styles.fallbackIcon}>{bookmark.title.charAt(0).toUpperCase()}</div>
                        )}
                    </div>
                    <span className={styles.title}>{bookmark.title}</span>
                </a>
            ) : (
                <div
                    className={styles.link}
                    style={{ cursor: 'move' }}
                >
                    <div className={styles.iconContainer}>
                        {bookmark.icon ? (
                            <img src={bookmark.icon} alt={bookmark.title} className={styles.icon} />
                        ) : (
                            <div className={styles.fallbackIcon}>{bookmark.title.charAt(0).toUpperCase()}</div>
                        )}
                    </div>
                    <span className={styles.title}>{bookmark.title}</span>
                </div>
            )}
            {!isLocked && (
                <>
                    <button
                        className={styles.editBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onEdit(bookmark);
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        <FaPen />
                    </button>
                    <button
                        className={styles.deleteBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onDelete(bookmark.id);
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        <FaTimes />
                    </button>
                </>
            )}
        </div>
    );
};

export const Bookmarks: React.FC<BookmarksProps> = ({ isLocked, gridColumns }) => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: '', url: '', icon: '' });
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        const saved = localStorage.getItem('bookmarks');
        if (saved) {
            setBookmarks(JSON.parse(saved));
        } else {
            const defaults: Bookmark[] = [
                { id: '1', title: 'Google', url: 'https://google.com', icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64' },
                { id: '2', title: 'GitHub', url: 'https://github.com', icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64' },
                { id: '3', title: 'YouTube', url: 'https://youtube.com', icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64' },
            ];
            setBookmarks(defaults);
            localStorage.setItem('bookmarks', JSON.stringify(defaults));
        }
    }, []);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setBookmarks((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                const newItems = arrayMove(items, oldIndex, newIndex);
                localStorage.setItem('bookmarks', JSON.stringify(newItems));
                return newItems;
            });
        }
    };

    const openAddModal = () => {
        setEditingId(null);
        setFormData({ title: '', url: '', icon: '' });
        setIsModalOpen(true);
    };

    const openEditModal = (bookmark: Bookmark) => {
        setEditingId(bookmark.id);
        setFormData({ title: bookmark.title, url: bookmark.url, icon: bookmark.icon || '' });
        setIsModalOpen(true);
    };

    const handleUseDefaultIcon = () => {
        if (!formData.url) return;
        let url = formData.url;
        if (!url.startsWith('http')) url = 'https://' + url;
        try {
            const hostname = new URL(url).hostname;
            const iconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
            setFormData({ ...formData, icon: iconUrl });
        } catch (e) {
            console.error('Invalid URL', e);
        }
    };

    const handleSave = async () => {
        if (!formData.title || !formData.url) return;

        setIsLoading(true);
        let url = formData.url;
        if (!url.startsWith('http')) url = 'https://' + url;

        try {
            // Use provided icon or generate default if empty
            let iconUrl = formData.icon;
            if (!iconUrl) {
                const hostname = new URL(url).hostname;
                iconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
            }

            if (editingId) {
                // Update existing
                const updated = bookmarks.map(b =>
                    b.id === editingId
                        ? { ...b, title: formData.title, url: url, icon: iconUrl }
                        : b
                );
                setBookmarks(updated);
                localStorage.setItem('bookmarks', JSON.stringify(updated));
            } else {
                // Add new
                const newItem: Bookmark = {
                    id: Date.now().toString(),
                    title: formData.title,
                    url: url,
                    icon: iconUrl
                };
                const updated = [...bookmarks, newItem];
                setBookmarks(updated);
                localStorage.setItem('bookmarks', JSON.stringify(updated));
            }

            setIsModalOpen(false);
            setFormData({ title: '', url: '', icon: '' });
            setEditingId(null);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = (id: string) => {
        const updated = bookmarks.filter(b => b.id !== id);
        setBookmarks(updated);
        localStorage.setItem('bookmarks', JSON.stringify(updated));
    };

    return (
        <div className={styles.container} style={{ maxWidth: `${gridColumns * 100}px` }}>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={bookmarks.map(b => b.id)}
                    strategy={rectSortingStrategy}
                >
                    <div
                        className={styles.grid}
                        style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
                    >
                        {bookmarks.map((bookmark) => (
                            <SortableItem
                                key={bookmark.id}
                                bookmark={bookmark}
                                onDelete={handleDelete}
                                onEdit={openEditModal}
                                isLocked={isLocked}
                            />
                        ))}

                        {!isLocked && (
                            <button className={styles.addBtn} onClick={openAddModal}>
                                <FaPlus />
                            </button>
                        )}
                    </div>
                </SortableContext>
            </DndContext>

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3>
                            {navigator.language.startsWith('zh')
                                ? (editingId ? '编辑书签' : '添加书签')
                                : (editingId ? 'Edit Bookmark' : 'Add Bookmark')}
                        </h3>
                        <input
                            placeholder={navigator.language.startsWith('zh') ? '标题' : 'Title'}
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                        />
                        <input
                            placeholder="URL"
                            value={formData.url}
                            onChange={e => setFormData({ ...formData, url: e.target.value })}
                        />
                        <div className={styles.iconInputGroup}>
                            <input
                                placeholder={navigator.language.startsWith('zh') ? '图标 URL (可选)' : 'Icon URL (Optional)'}
                                value={formData.icon}
                                onChange={e => setFormData({ ...formData, icon: e.target.value })}
                            />
                            <button onClick={handleUseDefaultIcon} className={styles.smallBtn} title="Use Default Icon">
                                {navigator.language.startsWith('zh') ? '默认' : 'Default'}
                            </button>
                        </div>

                        <div className={styles.modalActions}>
                            <button onClick={() => setIsModalOpen(false)}>{navigator.language.startsWith('zh') ? '取消' : 'Cancel'}</button>
                            <button onClick={handleSave} disabled={isLoading}>
                                {isLoading ? '...' : (navigator.language.startsWith('zh') ? '保存' : 'Save')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
