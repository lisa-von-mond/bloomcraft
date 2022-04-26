function turnFocusRightInScope(objekt) {
  if (objekt.limit === true) {
    null;
    setSystemCrash(true);
  } else {
    const scope = objekt.children;
    const Focus = scope.find(element => element.focus === true);
    const nextFocusIndex = Focus.flow === 1 ? scope.length : Focus.flow - 1;
    const nextFocus = scope.find(element => element.flow === nextFocusIndex);
    setFocusNow('### beam out to ' + nextFocus.name);
    const scopeA = scope.map(element =>
      element.focus === true ? { ...element, focus: false } : element
    );
    const scopeB = scopeA.map(element =>
      element.flow === nextFocusIndex ? { ...element, focus: true } : element
    );
    return { ...objekt, children: scopeB };
  }
}

function turnFocusRightNow(y) {
  let Base = y[0];
  if (Base.active === true) {
    return Beam1(turnFocusRightInScope, Base);
  } else {
    if (track(Base).limit === true) {
      setSystemCrash(true);
      oneLifeLess();
      return y;
    } else {
      if (track(Base).active === true) {
        return Beam2(turnFocusRightInScope, Base);
      } else {
        if (
          track(track(Base)).active === true &&
          track(track(Base)).limit !== true
        ) {
          return Beam3(turnFocusRightInScope, Base);
        } else {
          setSystemCrash(true);
          oneLifeLess();
          return y;
        }
      }
    }
  }
}
