const MyContainer = (props) => {
    return(
        <div style={{border: "2px solid green", padding: "10px", textAlign: "center"}}>
            Titulo
            <br />
            {props.children}
        </div>
    );
}

export default MyContainer;