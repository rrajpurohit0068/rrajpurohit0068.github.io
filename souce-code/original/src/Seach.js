import React from 'react';
const list = [
    {
        title: 'Rajiv',
        subtitle: '1234'
    },
    {
        title: 'Pravin',
        subtitle: '1234'
    },
    {
        title: 'Akash',
        subtitle: '1234'
    },
    {
        title: 'Saurabh',
        subtitle: '1234'
    },
    {
        title: 'Amit',
        subtitle: '1234'
    },
];

export const Search = () => {
    const [ search , setSearch] = React.useState('');
    const [searchList, setSearchList] = React.useState(list);
    const onSearch = (e) => {
        const val = e.target.value.toLowerCase()
        setSearch(val);
        if (val === '') {
            setSearchList(list);
            return;
        }
        
        setSearchList(
            list.filter(({ title }) => {
                return title.toLowerCase().includes(val)
            })

        )
        

    }
    
    return <div>
        <h1>Search Feature</h1>
        <input type='text' onChange={onSearch} value={search}/>
            <ul>
                {
                    searchList.map(({ title }) => {
                        return <li>{title}</li>
                    })
                }
            </ul>
        </div>
}