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
    }

    componentDidMount() {
        this.setState({
            ncols: this.props.rhead.length,
            npages: this.props.rbody.length/10
        });
    }

    generalChangePage = (element) => {
    let rows = document.getElementsByClassName("pagination-body"),
        pages = document.getElementsByClassName("pagination-list-item"),
        iPage = parseInt(element.dataset.key);
    Array.prototype.forEach.call( rows, (row,i) => { row.classList.add("hide"); });
    Array.prototype.forEach.call( pages, (page,i) => { page.classList.remove("active"); });
    element.classList.add("active");
    for(let i=(iPage-1)*this.state.elemxpage,j=0; j<this.state.elemxpage && i<rows.length; j++,i++){
        rows[i].classList.remove("hide");
    }
    }

    changePage = (event) => {
        if(!event.target.classList.contains("active")){
            this.generalChangePage(event.target);
        }
    }

    changePagePrev = () => {
        let pageActiveNow = document.getElementsByClassName("pagination-list")[0].querySelector(".active");
        if( pageActiveNow.dataset.key !== "1") {
            this.generalChangePage(pageActiveNow.previousSibling);
        }
    }

    changePageNext = () => {
        let pageActiveNow = document.getElementsByClassName("pagination-list")[0].querySelector(".active");
        if( pageActiveNow.dataset.key !== document.getElementsByClassName("pagination-list-item").length ) {
            this.generalChangePage(pageActiveNow.nextSibling);
        }
    }

    changeLengthItems = () => {
        let rows = document.getElementsByClassName("pagination-body");
        if(Array.prototype.filter.call(rows, (element,i) => !element.classList.contains("hide")).length < this.state.elemxpage){
            let element = document.querySelector(".pagination-list-item.active"),
                iPage = parseInt(element.dataset.key);
            Array.prototype.forEach.call( rows, (row,i) => { row.classList.add("hide"); });
            for(let i=(iPage-1)*this.state.elemxpage,j=0; j<this.state.elemxpage && i<rows.length; j++,i++){
                rows[i].classList.remove("hide");
            }
        }
    }

    render(){
        return (
            <div className="pagination" onChange={this.changeLengthItems}>
                <div className="pagination-nav">
                    <div className="pagination-list-item-prev" onClick={this.changePagePrev}>Anterior</div>
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
                    <div className="pagination-list-item-next" data-key="next" onClick={this.changePageNext}>Siguiente</div>
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
                                {ecol !== "null" ? ecol : "-"}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default Paginacion;