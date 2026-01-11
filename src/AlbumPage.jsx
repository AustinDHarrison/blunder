export default function AlbumsPage() {
    // Import all .md files from _albums directory at build time
    const albumFiles = import.meta.glob(`/src/_albums/*.md`, { eager: true, query: '?raw', import: 'default' });
    
    console.log('Album files found:', Object.keys(albumFiles));
    
    // Extract and parse JSON from .md files
    const albums = Object.entries(albumFiles).map(([path, content]) => {
        try {
            return content | null;
        } catch (e) {
            console.error(`Error parsing ${path}:`, e);
            return null;
        }
    }).filter(Boolean);

    return (
        <>
            <ul>
                {albums.length > 0 ? (
                    albums.map(album => <li key={album.title}>{album.title}</li>)
                ) : (
                    <li>No album files found</li>
                )}
            </ul>
        </>
    )
}