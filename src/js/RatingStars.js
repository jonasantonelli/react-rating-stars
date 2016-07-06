/**
 * (React) Rating Stars Compoment
 */

import React from 'react';
import autobind from 'autobind-decorator';
import classNames from 'classNames';

@autobind
class RatingStars extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            stars:[],
            rating: 0
        };
    }


    componentDidMount(){
        let stars = Array.from({length: this.props.stars}, (item = {}, index) => {
            item.rating = index + 1;
            item.selected = false;
            item.on = false;
            return item;
        });
        this.setState({
            stars: stars
        })
    }

    /**
     * Executado ao passar o mouse sobre a estrela: over = true
     * @param  {[number]} _key =             0 [description]
     * @return {[array]}      [setState: stars]
     */
    onStar(_key = 0){
        if(!this.state.stars.length){
            return;
        }
        let stars = this.state.stars.map( (item, key) => {
            if(key <= _key){
                item.on = true;
            }
            return item;
        });
        this.setState({
            stars: stars
        });
    }




    /**
     * Ao retirar o mouse da estrela: over = false
     * @return {[type]}  [setState: stars]
     */
    leaveStar(){
        if(!this.state.stars.length){
            return;
        }
        const stars = this.state.stars.map( (item) => {
            item.on = false;
            return item;
        });
        this.setState({
            stars: stars
        });
    }





    /**
     * Ao seleciona a estrela: selected = true
     * @param  {[number]} _key =             0 [key of array]
     * @return {[array]}      [setState: stars]
     */
    selectStar(_key = 0){
        if(!this.state.stars.length){
            return;
        }

        let rating = this.state.rating;

        const stars = this.state.stars.map( (item, key) => {
            item.selected = false;
            if(key <= _key){
                item.selected = true;
                rating = item.rating
            }
            return item;
        });

        this.props.onChange(rating);

        this.setState({
            rating,
            stars
        });
    }


    render(){

        const renderStars = this.state.stars.map( (item, key) => {

            const btnStarClass = classNames({
                'star': true,
                'on': item.on,
                'selected': item.selected
            });

            return (
                <button type="button"
                    className={btnStarClass}
                    key={key}
                    onMouseOver={this.onStar.bind(this, key)}
                    onMouseLeave={this.leaveStar}
                    onClick={this.selectStar.bind(this, key)}>
                        {item.rating}
                </button>
            )
        });

        return(
            <div className="rating-stars">
                <div className="container-rating-stars">
                    { this.props.stars ? renderStars : null }
                </div>
            </div>
        )
    }
};

RatingStars.propTypes = {
    stars: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default RatingStars;
