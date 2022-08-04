import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import styles from './Posts.module.css';
const Posts = () => {
  return (
    <div className={styles.container}>
        <NewPost/>
        <Post
          username='Assoul Sidali'
          imgUrl='/sidali.jpg'
          date='3 min ago.'
          text={`
I am hiring for PHP Developer
 
Job Description 
           
Position : Full Stack Developer
Experience : 2+ years
Location: Mumbai, Maharashtra, India
Notice  Period : Immediate to 30 Days
Must have Skills (2+ Years) : Codelgniter , JavaScript, OOPS .
          `}
        />
           <Post
          username='Assoul Sidali'
          imgUrl='/sidali.jpg'
          date='3 min ago.'
          text={`
I am hiring for PHP Developer
 
Job Description 
           
Position : Full Stack Developer
Experience : 2+ years
Location: Mumbai, Maharashtra, India
Notice  Period : Immediate to 30 Days
Must have Skills (2+ Years) : Codelgniter , JavaScript, OOPS .
          `}
        />
           <Post
          username='Assoul Sidali'
          imgUrl='/sidali.jpg'
          date='3 min ago.'
          text={`
I am hiring for PHP Developer
 
Job Description 
           
Position : Full Stack Developer
Experience : 2+ years
Location: Mumbai, Maharashtra, India
Notice  Period : Immediate to 30 Days
Must have Skills (2+ Years) : Codelgniter , JavaScript, OOPS .
          `}
        />
           <Post
          username='Assoul Sidali'
          imgUrl='/sidali.jpg'
          date='3 min ago.'
          text={`
I am hiring for PHP Developer
 
Job Description 
           
Position : Full Stack Developer
Experience : 2+ years
Location: Mumbai, Maharashtra, India
Notice  Period : Immediate to 30 Days
Must have Skills (2+ Years) : Codelgniter , JavaScript, OOPS .
          `}
        />
           <Post
          username='Assoul Sidali'
          imgUrl='/sidali.jpg'
          date='3 min ago.'
          text={`
I am hiring for PHP Developer
 
Job Description 
           
Position : Full Stack Developer
Experience : 2+ years
Location: Mumbai, Maharashtra, India
Notice  Period : Immediate to 30 Days
Must have Skills (2+ Years) : Codelgniter , JavaScript, OOPS .
          `}
        />
           <Post
          username='Assoul Sidali'
          imgUrl='/sidali.jpg'
          date='3 min ago.'
          text={`
I am hiring for PHP Developer
 
Job Description 
           
Position : Full Stack Developer
Experience : 2+ years
Location: Mumbai, Maharashtra, India
Notice  Period : Immediate to 30 Days
Must have Skills (2+ Years) : Codelgniter , JavaScript, OOPS .
          `}
        />
    </div>
  )
}

export default Posts