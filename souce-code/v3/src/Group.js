import { useState } from "react"

// problem: group of items
const data = [
    {
        groupName: 'pencil',
        items: [
            'a',
            'b',
            'c'
        ]
    },
    {
        groupName: 'p1l',
        items: [
            'a',
            'b',
            'c'
        ]
    },
    {
        groupName: 'p2',
        items: [
            'a',
            'b',
            'c'
        ]
    }
]
// 1. Creating Groups with Item
// gn text, list of item textaret ,  
// 2. Render Groups with Items
// list title and children
// 3. Seach the Group.
// search gn or item names
const groupOptions = [
    'pencil',
    'pen',
    'books'
]
export const GroupComponent = () => {

    const [groupsDataList, setGroupsDataList] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');

    const [gn, setGn] = React.useState('');
    const [items, setItems] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if (!gn || !items) {
            return
        }
        setGroupsDataList(prev => [...prev, { gn, items: items.split(',') }])
    }
    return <div>
        <form onSubmit={onSubmit}>
            <h1>Create Group</h1>
            <select value={gn} onChange={(e) => setGn(e.target.value)}>
                {groupOptions.map(g => {
                    return <option value={g}>{g}</option>
                })}
            </select>
            <textarea placeholder="items with , separated" value={items} onChange={(e) => setItems(e.target.value)} />
            <button type="submit" >submit </button>
        </form>
        <div>
            <h1>Grousp List</h1>
            <input placeholder="Search Group or items in group" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            {
                groupsDataList.filter(({ gn, items }) => {
                    let val = searchText.toLowerCase();
                    return (gn.toLowerCase().includes(val) || items.join(' ').toLowerCase().includes(val))

                }).map(({ gn, items }) => {
                    return <div>
                        <h2>{gn}</h2>
                        {items.join(' , ')}
                    </div>
                })
            }
        </div>

    </div>
}

