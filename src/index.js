import { Component } from "react";

const metaManager = require('meta-manager');

export default class MetaManager extends Component {
    /**
     * Set the initial tags
     */
    componentWillMount() {
        this.metaManager = metaManager(this.props.tags);
    }
    
    /**
     * Write the tags to DOM
     */
    componentDidMount() {
        this.metaManager.render();
    }
    
    /**
     * Update tags as needed
     */
    componentWillReceiveProps(nextProps) {
        if (this.props.tags != nextProps.tags) {
            this.metaManager.setTags(nextProps.tags); 
            this.metaManager.render();
        }
    }
    
    /**
     * Render children (or nothing)
     */
    render() {
        return this.props.children || null;    
    }
}