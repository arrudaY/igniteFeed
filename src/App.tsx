import './global.css'

import styles from './App.module.css'
import { Header } from './components/Header.jsx'
import { Post, PostType } from './components/Post.tsx'
import { Sidebar } from './components/Sidebar.jsx'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/arruday.png',
      name: 'Felipe Arruda',
      role: 'Web developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-07-05 5:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/tamirisrgarcia.png',
      name: 'Tamiris Garcia',
      role: 'Web developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-07-10 6:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
