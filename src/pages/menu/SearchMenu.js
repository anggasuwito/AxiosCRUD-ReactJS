import React from 'react'

export default function SearchMenu(props) {
    return (
        <div>
            <br />
            <input type="text" className="form-control" value={props.keywords} onChange={(e) => props.onKeywords(e.target.value)} placeholder="Search...." />
        </div>
    )
}
