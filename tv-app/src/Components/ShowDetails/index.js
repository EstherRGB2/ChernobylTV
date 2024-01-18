import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

export default function ShowDetails() {
const { showId } = useParams();
const { shows, setShows } = useState(null)
useEffect(() => {

  const fetchShowDetails = async ()
})
}