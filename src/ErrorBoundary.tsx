import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught React error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '24px', fontFamily: 'monospace', background: '#0d1117', color: '#f85149', minHeight: '100vh' }}>
          <h2 style={{ color: '#ff7b72', marginTop: 0 }}>⚠️ Application Runtime Error</h2>
          <p style={{ color: '#c9d1d9' }}>The application encountered an error while rendering:</p>
          <pre style={{ background: '#161b22', padding: '16px', borderRadius: '6px', overflowX: 'auto', color: '#ffa657' }}>
            {this.state.error && this.state.error.toString()}
            {'\n'}
            {this.state.errorInfo?.componentStack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              background: '#238636',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
