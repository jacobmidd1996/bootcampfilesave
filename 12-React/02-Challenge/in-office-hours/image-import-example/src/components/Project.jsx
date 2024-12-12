function Project({ name, github, image }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{github}</p>
      <div>
        <img style={{ width: 200 }} src={image} alt={name} />
      </div>
    </div>
  )
}

export default Project;