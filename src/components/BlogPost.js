import '../styles/BlogPost.css';

import Hero from './Hero'

import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SuggestedReadNext from './SuggestedReadNext';
import { useEffect, useState } from 'react'
import { database } from '../App'
import { getDoc, doc } from 'firebase/firestore'
import Gist from 'react-gist'

function BlogPost() {
  const [blogPost, setBlogPost] = useState(undefined)
  const [loading, setLoading] = useState(true)

  var { url } = useParams()

  useEffect(() => {
    getDoc(doc(database, 'posts', url)).then(snapshot => {
      setBlogPost({
        ...snapshot.data(),
        id: snapshot.id
      })
      setLoading(false)
    })
  }, [setBlogPost, url])

  const content = blogPost !== undefined ? (
    <>

      {
        blogPost.content.map((post, idx) => 
          <div className='post' key={idx}>
            {
              post.type === 'text' && <>
                <h2>{post.heading}</h2>
                <p>{post.content}</p>
              </>

            }
            {
              post.type === 'image+text' && <>
                <h2>{post.heading}</h2>
                <img src={post.imageUrl} alt={post.imageCaption} className='post-image with-text-below' />
                <p>{post.content}</p>
              </>
            }
            {
              post.type === 'image+code' && <>
                <h2>{post.heading}</h2>
                <img src={post.imageUrl} alt={post.imageCaption} className='post-image with-text-below' />
                <div className='gist'><Gist id={post.code} /></div>
              </>
            }
          </div>
        )
      }

      {
        blogPost.suggestedReadNext !== undefined ? (
          <>
            <h2>What to read next?</h2>
            <SuggestedReadNext name={blogPost.suggestedReadNext.name} description={blogPost.suggestedReadNext.description} url={blogPost.suggestedReadNext.url} blogUrl={blogPost.suggestedReadNext.blogUrl} imageUrl={blogPost.suggestedReadNext.imageUrl} imageAlt={blogPost.suggestedReadNext.imageAlt} wordCount={blogPost.suggestedReadNext.wordCount} date={blogPost.suggestedReadNext.date} />
          </>
        ) : 
        (<></>)
      }

      <img id='wave' src='/assets/wave.png' alt='' />

      <footer>
          <h2>Contact Me</h2>
          <p>admin@dillon-hunt.com</p>
      </footer>
    </>) :
    (<></>)

  return (
    <div className='BlogPost'>
        <Helmet>
          <title>{blogPost !== undefined ? blogPost.title + ' | Dillon Hunt' : loading ? 'Loading' : '404'}</title>
          <meta name='description' content={blogPost !== undefined ? blogPost.description : '404 - That\'s An Error'} />
        </Helmet>
        <Hero title={blogPost !== undefined ? blogPost.title : loading ? '' : '404'} subtitle={blogPost !== undefined ? 'A Post By Dillon Hunt.' : loading ? '' : 'Page Not Found'}/>
        {content}
    </div>
  );
}

export default BlogPost;