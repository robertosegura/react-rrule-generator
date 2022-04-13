import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TextareaAutosize from 'react-autosize-textarea';
import Container from '@material-ui/core/Container';
import ReactRRuleGenerator from '../lib';

class App extends Component {
  state = {
    rrule: 'DTSTART:20190301T230000Z\nFREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1',
    isCopied: false,
  };

  handleChange = (newRRule) => {
    this.setState({ rrule: newRRule, isCopied: false });
  };

  handleCopy = () => {
    this.setState({ isCopied: true });
  };

  render() {
    const { rrule, isCopied } = this.state;

    return (
      <Container maxWidth="md">
        <div>
          <h5>{'<RRuleGenerator />'}</h5>
          <ReactRRuleGenerator
            onChange={this.handleChange}
            value={this.state.rrule}
            config={{
              hideStart: false,
            }}
          />
        </div>
        <div>
          <h5>Example handling</h5>
          <div>
            <div>
              <div>
                <span>
                  <strong>
                    RRule
                  </strong>
                </span>
              </div>
              <div>
                <TextareaAutosize
                  className={`form-control rrule ${isCopied ? 'rrule-copied' : 'rrule-not-copied'}`}
                  value={rrule}
                  readOnly
                />
              </div>
              <div>
                <CopyToClipboard
                  text={rrule}
                  onCopy={this.handleCopy}
                >
                  <button
                    aria-label="Copy generated RRule"
                    className={`btn ${isCopied ? 'btn-secondary' : 'btn-primary'} float-right`}
                  >
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
