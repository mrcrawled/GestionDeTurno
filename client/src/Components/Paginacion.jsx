import React, { Component } from 'react';

class Paginacion extends Component {
    constructor(props){
        super(props);
        this.state = {
            elemxpage: 10,
            ncols: this.props.rhead.length,
            npages: this.props.rbody.length/10,
            irow: 0
        };
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.setState({
            ncols: this.props.rhead.length,
            npages: this.props.rbody.length/10
        });
    }

    changePage = (event) => {
        let rows = document.getElementsByClassName("pagination-body"),
            pages = document.getElementsByClassName("pagination-list-item"),
            iPage = parseInt(event.target.dataset.key);
        Array.prototype.forEach.call( rows, (row,index) => { row.classList.add("hide"); });
        Array.prototype.forEach.call( pages, (page,index) => { page.classList.remove("active"); });
        event.target.classList.add("active");
        for(let i=(iPage-1)*10,j=0; j<10 && i<rows.length; j++,i++){
            rows[i].classList.remove("hide");
        }
    }

    render(){
        return (
            <div className="pagination">
                <div className="pagination-list">
                    {(() => {
                        let paginationItem = [],
                            npages = Math.ceil(this.props.rbody.length/10);
                        paginationItem.push(
                            <div className="pagination-list-item active" data-key="1" onClick={this.changePage} key="1">{1}</div>
                        );
                        for(let i=2; i<=npages; i++){
                            paginationItem.push(
                                <div className="pagination-list-item" data-key={i} onClick={this.changePage}  key={i}>{i}</div>
                            );
                        }
                        return paginationItem;
                    })()}
                </div>
                <div className="pagination-row pagination-head">
                    { this.props.rhead.map( (ecol, key) => 
                        <div className={`pagination-${this.state.ncols}-col`} key={key}>
                            {ecol}
                        </div>
                    )}
                </div>
                { this.props.rbody.map( (row, key) =>
                    <div className={(() => {
                        this.state.irow = this.state.irow + 1;
                        return `pagination-row pagination-body ${this.state.irow > 10 ? "hide" : ""}`;
                    })()} key={key}>
                        { row.map( (ecol,kitem) => 
                            <div className={`pagination-${this.state.ncols}-col`} key={kitem}>
                                {ecol}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default Paginacion;