export const MyButton = (props) => {

    return (
        <button style={{background: "green"}} onClick={props.method}>{props.title}</button>
    );
};