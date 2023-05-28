import './Btn.scss'

function Btn(props){
    
    return(
        <div className={props.color}>
            {props.value}
        </div>
    );
}

export default Btn;