function Main({ activeNote, onUpdateNote }) {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,  
            [key]: value,
            lastModified: Date.now()
        });
    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>
    
    return < div className="interaction-main">
        <div className="interaction-main-note-edit">
            <input 
                type="text" 
                id="title" 
                value={activeNote.title} 
                onChange={() => onEditField("title", e.target.value)} 
                autoFocus 
            />
            <textarea 
                id="body" 
                placeholder="Desrcibe your interaction here..." 
                value={activeNote.body}
                onChange={(e) => onEditField("body", e.target.value)}
            />
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{note.title}</h1>
            <ReactMarkdown className="markdown-preview">
                {actiive.body}
            </ReactMarkdown>
        </div>
    </div>

}

export default Main;