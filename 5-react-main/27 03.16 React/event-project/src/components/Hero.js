function Hero({ name, thumbnail }) {
  return <li className="hero">
    <span className="hero__image">
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
    </span>
    <span className="hero__name">{name}</span>
  </li>
}

export default Hero
