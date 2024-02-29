import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar.jsx'
// import ptBR from 'date-fns/locale/pt-BR';
// import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from './Comment.jsx'
import styles from './Post.module.css'

interface Author {
  name: string
  role: string
  avatarURL: string
}
interface Content {
  type: 'paragraph' | 'link'
  content: string
}
export interface PostType {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}
interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')
  //
  //    const publishedDate = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR});
  //    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,{ locale: ptBR, addSuffix: true});

  const isNewCommentEmpty = newCommentText.length === 0

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    // setComments([...comments, newCommentText]);
    setNewCommentText('')
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }
  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        {/* <time title={publishedDate} dateTime={post.publishedAt.toISOString()}> */}
        {/*    {publishedDateRelativeToNow} */}
        {/* </time> */}
      </header>

      <div className={styles.content}>
        {/*  {post.content.map((item) => {
          if (item.type === 'paragraph') {
            // não tem id, por isso o próprio conteúdo foi usado como key
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return (
              <p key={item.content}>
                <a href="">{item.content}</a>
              </p>
            )
          }
        })} */}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
