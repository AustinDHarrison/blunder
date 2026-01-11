import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const albumsDir = path.join(process.cwd(), 'src/_albums'); // local folder
    const files = fs.readdirSync(albumsDir);

    const albums = files.map(file => {
        const content = fs.readFileSync(path.join(albumsDir, file), 'utf-8');
        return JSON.parse(content);
    });

    return { props: { albums } };
}
``
export default function AlbumsPage({ albums }) {
    return (
        <div>
            {albums.map((album, i) => (
                <div key={i}>
                    <h2>{album.title}</h2>
                    <img src={album.cover_image} alt={album.title} />
                    <p>{album.body}</p>
                    <p>Released: {album.release_date}</p>
                </div>
            ))}
        </div>
    );
}
