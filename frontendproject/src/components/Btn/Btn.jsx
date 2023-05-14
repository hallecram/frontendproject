import '../../assets/sass/btn.css'

function Btn(props){
    return(
        <input type="button" className="btn" value={props.value}></input>
    );
}

export default Btn;