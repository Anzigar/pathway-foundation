import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Button component with different variants and sizes
 */
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === "large" ? "12px 28px" : props.size === "small" ? "6px 12px" : "8px 20px"};
  font-size: ${props => props.size === "large" ? "16px" : props.size === "small" ? "14px" : "15px"};
  font-weight: 600;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 8px;
  text-decoration: none;
  border: none;
  
  // Primary variant
  ${props => props.variant === "primary" && `
    background-color: ${props => props.theme.colors?.primary || "#087FAE"};
    color: white;
    &:hover {
      background-color: ${props => props.theme.colors?.primaryDark || "#06618d"};
      transform: translateY(-2px);
    }
  `}
  
  // Secondary variant
  ${props => props.variant === "secondary" && `
    background-color: ${props => props.theme.colors?.secondary || "#EFB000"};
    color: white;
    border: 1px solid var(--primary-color);
    &:hover {
      background-color: ${props => props.theme.colors?.secondaryDark || "#d9a000"};
      transform: translateY(-2px);
    }
  `}
  
  // Tertiary variant
  ${props => props.variant === "tertiary" && `
    background-color: transparent;
    color: white;
    border: 1px solid white;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  `}
  
  // Disabled state
  ${props => props.disabled && `
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  `}
`;

const Button = ({ to, variant = "primary", size = "medium", children, onClick, type = "button", disabled, className, ...props }) => {
  // If 'to' prop is provided, render as Link from react-router
  if (to) {
    return (
      <StyledButton
        as={Link}
        to={to}
        variant={variant}
        size={size}
        disabled={disabled}
        className={className}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
  
  // Otherwise render as a regular button
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;