import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" 
                onClick={this.removeTrack}
                title="Remove from Playlist">-</button>
        } else {
            return <button className="Track-action" 
                onClick={this.addTrack}
                title="Add to Playlist">+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    playPreview() {
        if (this.props.track.preview === null) {
            return <p className="No-Preview">No preview available for this track.</p>
        } else {
            return <div className="Audio"><audio controls src={this.props.track.preview}>Your browser does not support audio playback.</audio></div>
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.playPreview()}
                {this.renderAction()}
            </div>
        );
    }
};

export default Track;