import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openId: null
    }
  }

  handleClick() {
    const update = { openId: id }
    if (this.state.openId === id) {
      update.openId = null
    }
    this.setState(update)
  }

  render() {
    const topics = this.props.topics.map(topic => (
        <div className="topic" key={topic.id}>
          <div className="topic-title" onClick={() => this.handleClick(topic.id)}>
            <h3>{topic.title}</h3>
          </div>
          {
          this.state.openId === topic.id
            ? (
              <div className="topic-content">
                {topic.content}
              </div>)
            : null
            }
        </div>
      )
    )

    return (
      <div className='accordion-container'>
        {topics}
      </div>
    )
  }
}
