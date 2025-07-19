import type { JwtPayloadDto } from '@easy-generator/types';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload extends JwtPayloadDto {
  exp?: number;
  iat?: number;
}

export function decodeJwtToken(token: string): JwtPayload | null {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return null;
  }
}

export function isTokenExpired(token: string): boolean {
  try {
    const payload = decodeJwtToken(token);
    if (!payload || !payload.exp) {
      return true;
    }
    
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  } catch (error) {
    console.error('Error checking token expiration:', error);
    return true;
  }
}

export function getUserFromToken(token: string) {
  try {
    const payload = decodeJwtToken(token);
    console.log('payload',payload);
    if (!payload) {
      return null;
    }

    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
    };
  } catch (error) {
    console.error('Error extracting user from token:', error);
    return null;
  }
} 