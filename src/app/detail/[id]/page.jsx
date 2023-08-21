import Link from 'next/link';
import { projectList } from "@/constants/constants";

export default function Detail(props) {
  console.log(props)
  const {
    title,
    image,
    skills,
    url,
    text
  } = projectList[0]; // 2

  return (
    <main className="detail">
      <section>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <ul className='skills'>
          {skills.map((skill, key) => (
            <li key={key}>{skill}</li>
          ))}
        </ul>
        <Link href={url}>{url}</Link>
        <p>{text}</p>
      </section>
    </main>
  )
}
