import '../../assets/sass/btn.scss'

function Btn(props){
    return(
        <input type="button" className="btn" value={props.value}></input>
    );
}

export default Btn;