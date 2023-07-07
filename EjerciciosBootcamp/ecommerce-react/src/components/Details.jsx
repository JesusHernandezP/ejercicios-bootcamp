function Details( {likes} ) {
    return <aside className="fixed-details">
        <div className="app">
        <div className="fixed-details__left">
            <i className={likes ? 'icon-heart'  : 'icon-heart-empty'}></i>
            ( { likes })
            
            </div>
        </div>
    </aside>
    
}

export default Details