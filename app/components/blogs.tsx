import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from 'react';

interface Post {
  title: string;
  url: string;
  coverImage: {
    url: string;
  };
}

interface PostsResponse {
  data: {
    publication: {
      isTeam: boolean;
      title: string;
      posts: {
        edges: { node: Post }[];
      };
    };
  };
}

export default function Blogs() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query Publication {
            publication(host: "madhavganesan.hashnode.dev") {
              isTeam
              title
              posts(first: 10) {
                edges {
                  node {
                    title
                    url
                    coverImage {
                      url
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((data: PostsResponse) => {
        console.log(data.data.publication.posts)
        setPosts(data.data.publication.posts.edges.map(edge => edge.node));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-5 px-5'>
        <p className='text-white text-6xl font-bold'>Latest Blogs</p>
        <ImageList className='w-full h-1/2'>
          {posts.map((item, index) => (
              <ImageListItem key={index}>
                <a href={item.url} key={index}>
                <img
                  src={item.coverImage.url}
                  alt={item.title}
                  loading="lazy"
                />
                </a>
                {/* <ImageListItemBar
            title={item.title}
            position="below"
            style={{backgroundColor:'white'}}
          /> */}
              </ImageListItem>
          ))}
        </ImageList>
      </div>

    </div>
  );
}
