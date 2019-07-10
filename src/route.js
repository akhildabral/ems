function routes () => {
  return (<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/settings" component={Settings} />
  </Switch>}
}

export default routes