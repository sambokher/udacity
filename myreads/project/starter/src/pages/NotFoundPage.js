import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="list-books-content">
        <h2>Page Not Found</h2>
        <Link to="/">Go to Library</Link>
    </div> 
  )
}