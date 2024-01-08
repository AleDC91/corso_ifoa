const SecondoComp = (props) => {
    console.log(props)
    return (
        <>
        <h3>secondo componente ad arrow function</h3>
        {props.list.map(ele => <h5>{ele.name}</h5>)}
        </>

    )
}
export default SecondoComp;