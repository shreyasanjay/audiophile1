import Alert from 'react-bootstrap/Alert';
import './App.css';
import './Tabs.css';
function TabsEx() {
  return (
    <div>
    <Alert variant="info" className="info-al1">
        Know more about some of the <strong>Generes</strong>
      </Alert>
      <section className="timeline">
        <div className="container-time">
            <ol className="ps-timeline">
                <li>
                    <div className="img-handler-top">
                        <img src="jazz.png" alt=""/>
                    </div>
                    <div className="ps-bot">
                        <p>Do you have a recent injury or long term pain?</p>
                    </div>
                    <span className="ps-sp-top">01</span>
                </li>
                <li>
                    <div className="img-handler-bot">
                        <img src="classical.png" alt=""/>
                    </div>
                    <div className="ps-top">
                        <p>Have you tried Physiotherapy, Chiropractor or your GP without the pain free results?</p>
                    </div>
                    <span className="ps-sp-bot">02</span>
                </li>
                <li>
                    <div className="img-handler-top">
                        <img src="opera.png" alt=""/>
                    </div>
                    <div className="ps-bot">
                        <p>Let Physology assess and treat your pain with our trusted revolusionary approach.</p>
                    </div>
                    <span className="ps-sp-top">03</span>
                </li>
                <li>
                    <div className="img-handler-bot">
                        <img src="electronic.png" alt=""/>
                    </div>
                    <div className="ps-top">
                        <p>Join our happy family of pain free clients.</p>
                    </div>
                    <span className="ps-sp-bot">04</span>
                </li>
            </ol>
        </div>
    </section>
    </div>
  );
}
export default TabsEx;