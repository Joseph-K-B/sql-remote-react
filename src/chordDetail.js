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
        // message: 'Update request approved',
        // error: false
    };

    componentDidMount = async () => {
        const chordId = this.props.match.params.id
        const chordData = await getChords(chordId)
        const classData = await getClasses(chordId)
        this.setState({ ...chordData, classData })
    };

    // getClassId = () => {
    //    const chordObj = this.state.classes.find(
    //        (cl) => cl.class === this.state.class);
    //     return chordObj.id;
    // };
    // updateChord = async (e) => {
    //     e.preventDefault();
    //     const chordData = {
    //         id: this.state.id,
    //         key: this.state.key,
    //         image_url: 'x' ,
    //         major: this.state.major,
    //         class_id: this.getClassId(),
    //     };
    //     const data = await putChord(chordData);
    //     if (data.error) {
    //         //display error message
    //         this.setState({ message: data.error, error: true });
    //     } else {
    //         this.setState({ message: 'Update Succeeded', error: false });
    //         setTimeout(() => {
    //             this.setState({ message: '' });
    //         }, 6000)
    //     }
    // };
    render() {
        return (
            <>  
                {/* {this.state.message && (
                <div className={classNames({
                    message: true,
                    error: this.state.error,
                    success: !this.state.error,
                })}
                >
                    {this.state.message}
                </div>
                )} */}
                <h1>{this.state.chord}</h1>
                <img alt={this.state.chord} src={this.state.image_url} />
                <form id='update-chord'>
                    <div className='chord-card'>
                        <label>Chord:</label>
                        <input 
                            type='text' 
                            value={this.state.chord} 
                            onChange={(e) => this.setState({chord: e.target.value})}>
                        </input>
                    </div>
                    <div className='chord-card'>
                        <label>Key:</label>
                        <input 
                            type='text' 
                            value={this.state.key} 
                            onChange={(e) => this.setState({chord: e.target.value})}>
                        </input>
                    </div>
                    <div className='chord-card'>
                        <label>major:</label>
                        <input 
                            type='boolean' 
                            value={this.state.major} 
                            onChange={(e) => this.setState({chord: e.target.value})}>
                        </input>
                    </div>
                    <div className='chord-card'>
                        <select
                            value={this.state.class}
                            onChange={(e) => {
                                this.setState({ class: e.target.value });
                            }}
                            >
                            {this.state.classes.map ((cl) => {
                                return (<option value={cl.class}>{cl.class}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button onClick={this.updateChord}>Update Chord</button>
                </form>
            </>
        );
    }
}


export default ChordDetail