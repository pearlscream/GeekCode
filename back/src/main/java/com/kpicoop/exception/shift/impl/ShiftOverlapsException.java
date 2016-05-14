package com.bionic.exception.shift.impl;

import com.bionic.exception.shift.ShiftException;

/**
 * @author taras.yaroshchuk
 */
public class ShiftOverlapsException extends ShiftException {

    public ShiftOverlapsException() {
        super("This shift overlaps your other shift(s)");
    }
}