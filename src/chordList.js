import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getChords } from './fetch-utils.js'
import './chordList.css';


class ChordList extends Component {
    state = { chords: [] };
    componentDidMount = async () => {
        const data = await getChords();
        this.setState({ chords: data });
    };
    render() {
        return (
            <>
            <section className='chord-list'>
                {this.state.chords.map((c) => (
                    <div>
                        <h2>
                            <Link to = {`/chords/${c.id}`}>
                                <h2>{c.chord}</h2>
                            </Link>
                        </h2>
                        
                        <p>
                            Chord is {c.class} to the key of {c.musical_key}
                        </p>

                    </div>
                ))}
            </section>
            </>
        );
    }
}

export default ChordList