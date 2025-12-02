import React, { useState, useEffect } from 'react';
import type { Bookmark } from '../types';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FaPlus, FaTimes } from 'react-icons/fa';
import styles from './Bookmarks.module.css';

// Sortable Item Component
const SortableItem = ({ bookmark, onDelete }: { bookmark: Bookmark; onDelete: (id: string) => void }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: bookmark.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={styles.bookmarkItem}>
            <a href={bookmark.url} className={styles.link} onClick={() => {
                // Prevent navigation if we are dragging
            }}>
                <div className={styles.iconContainer}>
                    {bookmark.icon ? (
                        <img src={bookmark.icon} alt={bookmark.title} className={styles.icon} />
                    ) : (
                        <div className={styles.fallbackIcon}>{bookmark.title.charAt(0).toUpperCase()}</div>
                    )}
                </div>
                <span className={styles.title}>{bookmark.title}</span>
            </a>
            <button
                className={styles.deleteBtn}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onDelete(bookmark.id);
                }}
                onPointerDown={(e) => e.stopPropagation()} // Prevent drag start on delete button
            >
                <FaTimes />
            </button>
        </div>
    );
};

export const Bookmarks: React.FC = () => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newBookmark, setNewBookmark] = useState({ title: '', url: '' });

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        const saved = localStorage.getItem('bookmarks');
        if (saved) {
            setBookmarks(JSON.parse(saved));
        } else {
            // Default bookmarks
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

    const handleAdd = () => {
        if (!newBookmark.title || !newBookmark.url) return;

        let url = newBookmark.url;
        if (!url.startsWith('http')) url = 'https://' + url;

        const newItem: Bookmark = {
            id: Date.now().toString(),
            title: newBookmark.title,
            url: url,
            icon: `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`
        };

        const updated = [...bookmarks, newItem];
        setBookmarks(updated);
        localStorage.setItem('bookmarks', JSON.stringify(updated));
        setIsAdding(false);
        setNewBookmark({ title: '', url: '' });
    };

    const handleDelete = (id: string) => {
        const updated = bookmarks.filter(b => b.id !== id);
        setBookmarks(updated);
        localStorage.setItem('bookmarks', JSON.stringify(updated));
    };

    return (
        <div className={styles.container}>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={bookmarks.map(b => b.id)}
                    strategy={rectSortingStrategy}
                >
                    <div className={styles.grid}>
                        {bookmarks.map((bookmark) => (
                            <SortableItem key={bookmark.id} bookmark={bookmark} onDelete={handleDelete} />
                        ))}

                        <button className={styles.addBtn} onClick={() => setIsAdding(true)}>
                            <FaPlus />
                        </button>
                    </div>
                </SortableContext>
            </DndContext>

            {isAdding && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3>Add Bookmark</h3>
                        <input
                            placeholder="Title"
                            value={newBookmark.title}
                            onChange={e => setNewBookmark({ ...newBookmark, title: e.target.value })}
                        />
                        <input
                            placeholder="URL"
                            value={newBookmark.url}
                            onChange={e => setNewBookmark({ ...newBookmark, url: e.target.value })}
                        />
                        <div className={styles.modalActions}>
                            <button onClick={() => setIsAdding(false)}>Cancel</button>
                            <button onClick={handleAdd}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
