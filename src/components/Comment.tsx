import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'

import { Avatar } from './Avatar.jsx'
import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    // mais correto seria passar o id
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar border={false} src="https://github.com/arruday.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Arruda</strong>
              {/* <time */}
              {/*    title="11 de maio às 00:00h" */}
              {/*    dateTime="2023-08-02 00:00:00"> */}
              {/*    Cerca de 1h atrás */}
              {/* </time> */}
            </div>
            <button onClick={handleDeleteComment} title="Deletar">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
