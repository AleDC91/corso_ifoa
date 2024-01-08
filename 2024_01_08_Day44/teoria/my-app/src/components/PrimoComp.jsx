function PrimoComp({title, list}) {
  return (
    <> 
      <h2>Primo componente</h2>
      <p>paragrafone</p>
      {list.map(ele => <p>{ele.name} {ele.lastName} - {ele.city}</p>)}
      <strong>Tot. {list.length}</strong>
      <h3>{title}</h3>
    </>
  );
}

export default PrimoComp;
