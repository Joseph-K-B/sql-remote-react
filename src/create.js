import React, { Component } from 'react';
import { getClasses, createChord } from './fetch-utils.js';
import classNames from 'classnames';

class Create extends Component {
    state = {
        key:'',
        chord:'',
        major: true,
        class:'',
        classes: [],
        message: '',
        error: false
    };

    componentDidMount = async () => {
        const classes = await getClasses()
        this.setState({ classes })
    };

    getClassId = () => {
        const chordObj = this.state.classes.find(
            (cl) => cl.class === this.state.class)
         return chordObj.id;
     };

     handleBtn = async (e) => {
         e.preventDefault();
         const chordData = {
             key: this.state.key,
             chord: this.state.chord,
             major: this.state.major,
             class:this.state.class
         };
         const data = await createChord (chordData);
         if (data.error) {
             this.setState({ message: data.error, error: true });
        } else { 
            this.props.history.push('/')
        }
     }

    render() {
        return (
            <>
                 {this.state.message && (
                    <div className={classNames({
                        message: true,
                        error: this.state.error,
                        success: !this.state.error,
                    })}
                    >
                        {this.state.message}
                    </div>
                 )}
                    <h1>{this.state.chord}</h1>
                    <img alt={this.state.chord}></img>
                    <form id='update-chord'>
                        <div>
                            <label>Chord:</label>
                            <input 
                                type='text' 
                                value={this.state.chord} 
                                onChange={(e) => this.setState({chord: e.target.value})}>
                            </input>
                        </div>
                        <div>
                            <label>Key:</label>
                            <input 
                                type='text' 
                                value={this.state.key} 
                                onChange={(e) => this.setState({chord: e.target.value})}>
                            </input>
                        </div>
                        <div>
                            <label>Major:</label>
                            <input 
                                type='boolean' 
                                value={this.state.major} 
                                onChange={(e) => this.setState({chord: e.target.value})}>
                            </input>
                        </div>
                        <div>
                            <label>Class:</label>
                            <select
                                value={this.state.class}
                                onChange={(e) => {
                                    this.setState({ class: e.target.value });
                                }}
                                >
                                {this.state.classes.map ((cl) => {
                                    return (<option value={cl.class}>{cl.class}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <button>Add Chord</button>
                    </form>
            </>
        );
    } 
}

export default Create