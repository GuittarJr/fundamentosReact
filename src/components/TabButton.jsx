export default function TabButton({children, onHandleClick, isSelect}){
    return <li><button className={isSelect ? 'active' : ''} onClick={onHandleClick}>{children}</button></li>
}