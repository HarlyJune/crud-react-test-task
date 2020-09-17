import React from 'react';
Cell = ({cellData}) => {
    [editModeState, setEditModeState] = useState(false)
    const cellRef = useRef(null)
    useEffect(() => {
      setCellValue(cellData)
    }, [])
    const onCl = () => {
      setEditModeState(true);
      cellRef.current.focus()
      prevVal.current = cellRef.current.innerText;
      setDivStyle(p => ({ ...p, background: 'limegreen' }));    
    };
  const onKeyDown = e => {
    if (editModeState && e.keyCode === 13) { // ESC;
            setEditModeState(false)
            setCellValue(previousValue)
          }    
  }
}
function EditItem(){

    return (
        <span contentEditable={editModeState} onKeyDown={keyDn} ref={cellRef}>
        {item.title}
      </span>
    )
}
export default EditItem;