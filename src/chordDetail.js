import React, { Component } from 'react';
import { getChords, getClasses, putChord } from './fetch-utils.js';
import classNames from 'classnames';


class ChordDetail extends Component {
    state = {
        id: 0,
        key:'',
        chord:'',
        major: true,
        class:'',
        classes: [],
        message: '',
        error: false,
    };
    
    
    
    
    componentDidMount = async () => {
        const chordId = this.props.match.params.id
        const chordData = await getChords(chordId)
        const classData = await getClasses();
        console.log(this.state);
        this.setState({ ...chordData, classData });
    };

    getClassId = () => {
        const classObj = this.state.classes.find(
            (cl) => cl.class === this.state.class
        );
        return classObj.id
    };

    submitBtn = async (e) => {
        e.preventDefault();
        const chordData = {
            id: this.state.id,
            key: this.state.key,
            chord: this.state.chord,
            major: this.state.major,
            class_id: this.getClassId(),
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
                            onChange={(e) => this.setState({chord: e.target.value})}
                            type='text' 
                            value={this.state.chord}>
                        </input>
                    </div>
                    <div className='chord-card'>
                        <label>Key:</label>
                        <input 
                            onChange={(e) => this.setState({key: e.target.value})}
                            type='text' 
                            value={this.state.key}>
                        </input>
                    </div>
                    <div className='chord-card'>
                        <label>Major:</label>
                        <input 
                            onChange={(e) => this.setState({major: e.target.value})}
                            type='boolean' 
                            value={this.state.major}>
                        </input>
                    </div>
                    <div className='chord-card'>
                        <select
                            onChange={(e) => {
                                this.setState({ class: e.target.value });
                            }}
                            value={this.state.class}
                            >
                            {this.state.classes.map ((cl) => {
                                return (<option value={cl.class}>{cl.class}</option>
                                );
                            })}
                        </select>
                    </div>
                    <button onClick={this.updateChord}>Update Chord</button>
                </form>
            </>
        );
    }
}


export default ChordDetail;