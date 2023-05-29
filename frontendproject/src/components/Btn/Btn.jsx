import './Btn.scss'

function Btn(props){
    
    return(
        <div className={props.color}>
            <div className="btn-txt-wrapper">
                {props.value}
            </div>
        </div>
    );
}

export default Btn;