import Link from 'next/link'

export default function ProjectItem(props) {
  const { title, image, id } = props;

  return (
    <div className="project-item">
      <Link href={`/detail/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  )
}