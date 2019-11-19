import React from 'react';
import style from './style.module.css';


function TabContent(props) {
    return(
        <div className={style.tabcontent}>
            {props.children}
        </div>
    )
}


function Tab(props) {
    
    const { children: items } = props;
    const [ active, setActive ] = React.useState(0);

    const openTab = e => setActive(+e.target.dataset.index);
    
    return (
        <div className={ style.tabs }>
            <div className={ style.tab }>
                {items && items.map((item, i) => (
                    <button
                            key={ i }
                            className={`${ style.button } ${ i === active && style.buttonActive }`}
                            onClick={ openTab }
                            data-index={ i }>
                            { item.title }
                    </button>
                ))}
            </div>
            <TabContent>{ items && items[active].content }</TabContent>
        </div>
    );
}


export default Tab;
