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
    console.error('Remote shell yuklenemedi:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="remote-error-state">
          <section className="remote-error-card">
            <p className="eyebrow">Remote Hatasi</p>
            <h1>Host uygulama 3000 portunda acik, fakat remote shell su an yok.</h1>
            <p>
              Kullanici deneyimi tek SPA gibi 3000 uzerinden akar. Ancak navbar,
              sidebar ve authentication bilesenleri remote app tarafindan
              saglandigi icin 3001 arka planda acik olmali.
            </p>
            <code>npm.cmd run dev</code>
          </section>
        </div>
      );
    }

    return this.props.children;
  }
}
