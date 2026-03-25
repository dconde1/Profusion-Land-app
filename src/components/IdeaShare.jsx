import React, { useState, useEffect } from 'react';

const IdeaShare = () => {
    const [ideas, setIdeas] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [inspiration, setInspiration] = useState(1);
    const [isPublic, setIsPublic] = useState(false);

    useEffect(() => {
        const storedIdeas = JSON.parse(localStorage.getItem('ideas')) || [];
        setIdeas(storedIdeas);
    }, []);

    const addIdea = () => {
        const newIdea = { title, description, category, inspiration, isPublic };
        const updatedIdeas = [...ideas, newIdea];
        setIdeas(updatedIdeas);
        localStorage.setItem('ideas', JSON.stringify(updatedIdeas));
        clearForm();
    };

    const deleteIdea = (index) => {
        const updatedIdeas = ideas.filter((_, i) => i !== index);
        setIdeas(updatedIdeas);
        localStorage.setItem('ideas', JSON.stringify(updatedIdeas));
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setCategory('');
        setInspiration(1);
        setIsPublic(false);
    };

    return (
        <div>
            <h2>Idea Share</h2>
            <form onSubmit={(e) => { e.preventDefault(); addIdea(); }}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="number" min="1" max="5" value={inspiration} onChange={(e) => setInspiration(e.target.value)} required />
                <label>
                    Public
                    <input type="checkbox" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} />
                </label>
                <button type="submit">Add Idea</button>
            </form>
            <ul>
                {ideas.map((idea, index) => (
                    <li key={index}>
                        <h3>{idea.title}</h3>
                        <p>{idea.description}</p>
                        <p><strong>Category:</strong> {idea.category}</p>
                        <p><strong>Inspiration Level:</strong> {idea.inspiration}</p>
                        <p><strong>Visibility:</strong> {idea.isPublic ? 'Public' : 'Private'}</p>
                        <button onClick={() => deleteIdea(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IdeaShare;