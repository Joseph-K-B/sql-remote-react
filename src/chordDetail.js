import React, { Component } from 'react';
import { getChordId, getClasses, putChord } from './fetch-utils.js';
import classNames from 'classnames';
import './chordDetail.css';


class ChordDetail extends Component {
    state = {
        id: 0,
        musical_key:'',
        chord:'',
        major: true,
        class_id: 1,
        classes: [],
        message: '',
        error: false,
    };
    
    
    
    
    componentDidMount = async () => {
        const chordId = this.props.match.params.id
        const chordData = await getChordId(chordId)
        const classes = await getClasses();
        this.setState({ ...chordData, classes
            
             
        });
        
        console.log('state', this.state);
    };
    

    submitBtn = async (e) => {
        e.preventDefault();
        const chordData = {
            id: this.state.id,
            musical_key: this.state.musical_key,
            chord: this.state.chord,
            major: this.state.major,
            class_id: this.state.class_id,
        };

        const data = await putChord(chordData);
        if (data.error) {
            this.setState({ message: data.error, error: true });
        } else {
            this.setState({ message: 'Update Succeeded', error: false});
            setTimeout (() => {
                this.setState({ message: '' });
            }, 6000);
        }
    };
    
    render() {
        return (
            <>  
                {this.state.message && (
                    <div
                        className={classNames({
                            message: true,
                            error: this.state.error,
                            success: !this.state.error,
                        })}>
                            {this.state.message}
                    </div>
                )}
                <h1>{this.state.chord}</h1>
                <form id='update-chord'>
                    <div className='chord-card'>
                        <label>Chord:</label>
                        <input 
                            onChange={(e) => {
                                this.setState({chord: e.target.value});
                            }}
                            type='text' 
                            value={this.state.chord}
                        >
                        </input>
                    </div>
                    <div className='chord-card'>
                        <label>Musical Key:</label>
                        <input 
                            onChange={(e) => {
                                this.setState({musical_key: e.target.value});
                            }}
                            type='text' 
                            value={this.state.musical_key}
                        >
                        </input>
                    </div>
                    <div className='chord-card'>
                        <label>Class:</label>
                        <select
                            value={this.state.class_id}
                            onChange={(e) => {
                               this.setState({ class_id: e.target.value });
                            }}
                        >
                            {this.state.classes.map ((cl) => {
                                return (
                                    <option value={cl.id}>{cl.class}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className='chord-card'>
                        <label>Major:</label>
                        <select
                            value={this.state.major}
                            onChange={(e) => {
                               this.setState({ major: e.target.value });
                            }}
                        >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                                );
                        </select>
                    </div>
                    <button onClick={this.submitBtn}>Update Chord</button>
                </form>
            </>
        );
    }
}


export default ChordDetail;