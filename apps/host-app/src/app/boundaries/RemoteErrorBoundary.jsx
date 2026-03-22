import { Component } from 'react';

export default class RemoteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Remote content yuklenemedi:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="remote-error-state">
          <section className="remote-error-card">
            <p className="eyebrow">Remote Hatasi</p>
            <h1>Host uygulama acik, fakat remote content registry su an yok.</h1>
            <p>
              Navbar, sidebar ve authentication host tarafinda yonetiliyor.
              Ancak remote sayfalarin ve sidebar kayitlarinin okunabilmesi icin
              3001 portundaki remote uygulama arka planda acik olmali.
            </p>
            <code>npm.cmd run dev</code>
          </section>
        </div>
      );
    }

    return this.props.children;
  }
}
